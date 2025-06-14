def fib(n)
    return  n  if ( 0..1 ).include? n
  ( fib( n - 1 ) + fib( n - 2 ) )
end

def isPalindrome(n)
    str_n = n.to_s
    reversed_str = str_n.reverse
    return str_n == reversed_str
end

def nthmax(n, a)
    sorted_array = a.sort.reverse
    if n<sorted_array.length
        return sorted_array[n]
    else
        return nil
    end
end

def freq(s)
    return "" if s.empty?
    char_count = Hash.new(0)
    s.each_char { |char| char_count[char] += 1 }
    max_char = char_count.max_by { |char, count| count }[0]
    return max_char
end

def zipHash(arr1, arr2)
    if arr1.length != arr2.length
        return nil
      end
      result_hash = {}
      arr1.each_index do |i|
        result_hash[arr1[i]] = arr2[i]
      end
      return result_hash
end

def hashToArray(hash)
    keys=hash.keys
    result=[]
    keys.each do |key|
        result << [key, hash[key]]
    end
    return result
end
