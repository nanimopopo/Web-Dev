from models import Dog, Cat

dog = Dog("Buddy", 3, "Labrador")
cat = Cat("Whiskers", 2, "Black")

animals = [dog, cat]

for animal in animals:
    print(animal)
    print(animal.speak())