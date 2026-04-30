export const snippetHello = `print "Hello from Sapphire!"
who = "world"
print "Hello, #{who}!"`;

export const snippetGreet = `def greet(who) {
  "Hello, #{who}!"
}

print greet("world")`;

export const snippetGreeter = `class Greeter {
  attr who

  def greet {
    print "Hello, #{self.who}!"
  }
}

g = Greeter.new(who: "world")
g.greet`;

export const snippetValues = `n = 7
pi = 3
label = "answer"
print "#{label}: #{n + pi}"`;

export const snippetBlocks = `nums = [1, 2, 3, 4]
squares = nums.map { |n| n * n }
sum = nums.reduce(0) { |acc, n| acc + n }
print "squares: #{squares}"
print "sum: #{sum}"`;

export const snippetInheritance = `class Shape {
  attr color = "red"

  def area { 0 }

  def describe {
    "A #{self.color} shape"
  }
}

class Rectangle < Shape {
  attr width: Int
  attr height: Int

  def area {
    self.width * self.height
  }

  def describe {
    super.describe + " (#{self.width}x#{self.height})"
  }
}

r = Rectangle.new(width: 4, height: 5)
print r.describe   # A red shape (4x5)
print r.area       # 20
print r.is_a?(Shape) # true`;

export const snippetTypesExtended = `def clamp(value: Int, min: Int, max: Int) -> Int {
  if value < min {
    min
  } elsif value > max {
    max
  } else {
    value
  }
}

print clamp(5, 1, 10)   # 5
print clamp(-3, 1, 10)  # 1
print clamp(99, 1, 10)  # 10

# Annotations are optional — add them where you want safety

def abs(n: Int) -> Int {
  return -n if n < 0
  n
}

def factorial(n: Int) -> Int {
  return 1 if n <= 1
  n * factorial(n - 1)
}

print factorial(6)  # 720`;
