class Photo < ActiveRecord::Base
  include ActionView::Helpers::TagHelper
  include ActionView::Helpers::UrlHelper
  include ActionView::Helpers::AssetTagHelper

  attr_accessible :image, :taken_at, :source_url
  belongs_to :poi
  belongs_to :user, counter_cache: true
  mount_uploader :image, PhotoUploader
  # This process is being used for Carierwave backgrounder delayed jobs for staging and production.
  # Comment out this line to see the uploaded images immediately in dev mode.
  process_in_background :image

  before_create :extract_date_time

  after_destroy :remove_empty_directory

  validates :user_id, :poi_id, presence: true

  scope :with_user, -> { includes(:user) }
  scope :with_poi,  -> { includes(:poi) }
  has_many :measurements

  acts_as_api
  include Api::Photo

  def image_versions
    i = []
    i << { type: 'original', url: asset_path(image.to_s, protocol: :https), width: image.width, height: image.height }
    image.versions.each do |key, value|
      i << { type: key, url: asset_path(value.url, protocol: :https), width: value.width, height: value.height }
    end
    i
  end

  def taken_on
    (taken_at || created_at).to_i
  end

  protected

  # Dummy methods to generate full image paths
  def config
    Wheelmap::Application.config.action_controller
  end

  # Dummy methods to generate full image paths
  def controller
    ''
  end

  def extract_date_time
    self.taken_at = begin
                      exif_date_time = EXIFR::JPEG.new(image.path).date_time.to_s
                      DateTime.parse(exif_date_time)
                    rescue StandardError => e
                      puts "EXIF date_time format '#{exif_date_time}' is not supported: #{e}"
                      exif_date_time = nil
                    end
  end

  def remove_empty_directory
    FileUtils.remove_dir(Rails.root.join('public', image.store_dir), force: true)
  end
end
