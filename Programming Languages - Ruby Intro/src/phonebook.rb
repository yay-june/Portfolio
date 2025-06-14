class PhoneBook
    def initialize
        @entries = {}
    end

    def add(name, number, is_listed)
        unless number.match(/^\d{3}-\d{3}-\d{4}$/)
          return false
        end
        if @entries.key?(name)
          existing_entry = @entries[name]
          if existing_entry[:is_listed] && is_listed
            return false 
          end
        end
        @entries[name] = {
          number: number,
          is_listed: is_listed
        }
        return true
      end
    end

    def lookup(name)
        entry = @entries[name]
        if entry && entry[:is_listed]
          return entry[:number]
        else
          return nil
        end
    end

    def lookupByNum(number)
        entry = @entries.values.find { |e| e[:number] == number && e[:is_listed] }
        if entry
          return @entries.key(entry) 
        else
          return nil
        end
    end

    def namesByAc(areacode)
        matching_names = []
        @entries.each do |name, entry|
          if entry[:number].start_with?(areacode)
            matching_names << name
          end
        end
        return matching_names
    end
end
