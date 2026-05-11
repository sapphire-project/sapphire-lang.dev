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

export const snippetControlFlow = `score = 87

grade = match score {
  90..100 => { "A" }
  80..89 => { "B" }
  70..79 => { "C" }
  _ => { "keep going" }
}

print "grade: #{grade}"

(1..5).each { |n|
  print "even: #{n}" if n % 2 == 0
}`;

export const snippetBlocks = `nums = [1, 2, 3, 4]
squares = nums.map { |n| n * n }
sum = nums.reduce(0) { |acc, n| acc + n }
print "squares: #{squares}"
print "sum: #{sum}"`;

export const snippetMaps = `scores = { ada: 95, matz: 88, grace: 91 }
scores["sandy"] = 84

honors = scores.select { |name, score| score >= 90 }
honors.each { |name, score|
  print "#{name}: #{score}"
}

print "students: #{scores.keys}"`;

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
    super + " (#{self.width}x#{self.height})"
  }
}

r = Rectangle.new(width: 4, height: 5)
print r.describe   # A red shape (4x5)
print r.area       # 20
print r.is_a?(Shape) # true`;

export const snippetMethods = `class BankAccount {
  attr balance: Int = 0

  self {
    def open {
      self.new(balance: 0)
    }
  }

  def deposit(amount: Int) {
    self.balance = self.balance + validate(amount)
  }

  defp validate(amount: Int) -> Int {
    raise "amount must be positive" if amount <= 0
    amount
  }
}

account = BankAccount.open
account.deposit(100)
print account.balance`;

export const snippetErrors = `def safe_divide(a: Int, b: Int) -> Int {
  a / b
rescue e
  print "cannot divide: #{e}"
  0
}

print safe_divide(10, 2)
print safe_divide(10, 0)`;

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

export const snippetInterfacesMixins = `interface Greeter {
  def greet -> String
}

module Friendly {
  def greet -> String {
    "hello from a mixin"
  }
}

class Person {
  include(Friendly)
}

def welcome(person: Greeter) -> String {
  person.greet + "!"
}

print welcome(Person.new)`;

export const snippetAbstractClasses = `abstract class Shape {
  abstract def area -> Float

  def describe -> String {
    "area=#{self.area}"
  }
}

class Square < Shape {
  attr side: Float

  def area -> Float {
    self.side * self.side
  }
}

print Square.new(side: 4.0).describe`;
