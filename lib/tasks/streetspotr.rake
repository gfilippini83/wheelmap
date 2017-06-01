# encoding: utf-8

namespace :streetspotr do
  include ActionView::Helpers::TextHelper

  desc 'Check data from StreetSpotr'
  task :check do
    csv_file = ENV['file']
    raise 'Usage: bundle exec rake streetspotr:check file=<your_csv_file>' unless csv_file

    wheelchair_stati = Hash.new(0)
    toilet_stati = Hash.new(0)

    CSV.foreach(csv_file, headers: true, header_converters: :symbol, col_sep: ';', row_sep: :auto) do |row|
      osm_id = row[:osm_id]
      next if osm_id.blank?

      step = has_step(row)
      toilet = toilet(row)
      indoor = indoor(row)

      status = wheelchair_status(step, indoor)
      toilet = wheelchair_toilet(toilet)

      puts "Step: #{step}, Toilet: #{toilet}, Indoor: #{indoor} -> Status: #{status}, Toilet: #{toilet}."

      wheelchair_stati[status.to_sym] += 1
      toilet_stati[toilet.to_sym] += 1
    end

    puts
    puts "Wheelchair: Yes: #{wheelchair_stati[:yes]}, Limited: #{wheelchair_stati[:limited]}, No: #{wheelchair_stati[:no]}, Unknown #{wheelchair_stati[:unknown]}."
    puts "Toilet: Yes: #{toilet_stati[:yes]}, No: #{toilet_stati[:no]}, Unknown #{toilet_stati[:unknown]}."
  end

  desc 'Import data from StreetSpotr'
  task import: :environment do

    csv_file = ENV['file']
    raise 'Usage: bundle exec rake streetspotr:import file=<your_csv_file>' unless csv_file

    # Set to nil for records that have multiple entries sharing one osm_id
    poi = nil
    # Counter for save actions in total
    @count = 0

    provider = Provider.find_or_create_by(name: 'Streetspotr')

    @skipped = Hash.new(0)
    @saved = Hash.new(0)

    # Remove 4-byte characters (e.g. emoji) in strings
    UTF8_TO_UTF8MB4_CONVERTER = ->(str) { str.encode('utf-8', invalid: :replace, undef: :replace, replace: '').each_char.select { |char| char.bytesize < 4 }.join }

    CSV.foreach(csv_file, converters: UTF8_TO_UTF8MB4_CONVERTER, headers: true, header_converters: :symbol, col_sep: ';', row_sep: :auto) do |row|
      osm_id = row[:osm_id]

      def photo(node, row)
        photo_url = row[:photo_url]
        new_photo = node.photos.build
        new_photo.remote_image_url = photo_url
        new_photo.source_url = photo_url
        new_photo.user = User.wheelmap_visitor
        new_photo
      end

      def photo_check(poi, row)
        image = Photo.find_by(source_url: row[:photo_url])

        # Check for photo duplicates
        if image
          puts "Skipped: PHOTO #{image.id} already exists."
          @skipped[:photo] += 1
        else
          p = photo(poi, row)
          p.save!
          @count += 1
          @saved[:photo] += 1
          puts "Success: PHOTO for osm_id #{poi.id} saved!"
        end
      end

      # Loop through CSV and check if record has osm_id
      if osm_id.blank?
        unless poi
          puts "Skipped: osm_id blank and POI not found!"
          @skipped[:provided_poi] += 1
          next
        else
          provided_poi = ProvidedPoi.find_or_initialize_by(poi_id: poi.id, provider_id: provider.id)
          photo_check(poi,row)
          provided_poi.save!
          @count += 1
          @saved[:provided_poi] += 1
          puts "Success: Provided Poi with provided_poi_id #{provided_poi.id} saved!"
        end
      else
        # Find the POI
        poi = Poi.find_by(osm_id: osm_id)

        unless poi
          puts "Skipped: POI for osm_id #{osm_id} not found."
          @skipped[:provided_poi] += 1
          next
        else
          provided_poi = ProvidedPoi.find_or_initialize_by(poi_id: poi.id, provider_id: provider.id)
          photo_check(poi,row)
          provided_poi.save!
          @count += 1
          @saved[:provided_poi] += 1
          puts "Success: Provided Poi with provided_poi_id #{provided_poi.id} saved!"
        end
      end
    end
    puts
    pp = ProvidedPoi.all
    puts "EXISTING: ProvidedPois: #{pp.count}."
    puts "SKIPPED: Photos: #{@skipped[:photo]}, Provided Pois: #{@skipped[:provided_poi]}."
    puts "SAVE ACTIONS: Photos: #{@saved[:photo]}, Provided Pois: #{@saved[:provided_poi]}"
    puts "TOTAL SUCCESSFUL SAVE ACTIONS: #{@count}."
  end
end
