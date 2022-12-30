def prime_up_to(num)
  numList = [*2..num]
  primeList = []
  until numList.length == 0
    prime = numList[0]
    primeList.push(prime)
    numList.each do |n|
      numList.delete(n) if n % prime == 0
    end
  end
end