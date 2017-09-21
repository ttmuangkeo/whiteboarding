class Array
  def quickSort
    return [] if empty?
    
    pivot = delete_at(rand(size))
    left, right = partition(&pivot.method(:>))
    return *left.quickSort, pivot, *right.quickSort
  end
end

arr = [34,2,1,5,3]
p arr.quickSort