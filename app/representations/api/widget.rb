module Api
  module Widget
    extend ActiveSupport::Concern

    included do
      api_accessible :api_simple do |t|
        t.add :id
        t.add :api_key
        t.add :height
        t.add :width
        t.add :lat
        t.add :lon
        t.add :user_id
        t.add :categories
        t.add :bounding_box
        t.add :provider_id
        t.add :providers
      end
    end
  end
end
