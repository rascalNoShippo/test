def pfactrize(num)
  return [num, 1] if isPrime(num)
  root = Math.sqrt(num)
  primeList = prime_up_to(num)
  factor = []
  primeList.each do |p|
    exp = 0
    while num % p == 0 do
      num /= p
      exp += 1
    end
    factor.push([p, exp]) unless exp == 0
  end
  return factor
end
  
def isPrime(num)
  root = Math.sqrt(num)
  for i in 2..root do
    return false if num % i == 0
  end
  return true
end

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
  return primeList
end