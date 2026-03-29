class Animal:
    def __init__(self, name,age,species):
        self.name = name
        self.age = age
        self.species = species

    def speak(self):
        return "Animal makes a sound"

    def __str__(self):
        return f"{self.species} named {self.name} makes a sound and is {self.age} years old"

class Dog(Animal):
    def __init__(self,name,age,breed):
        super().__init__(name,age,breed)
        self.breed = breed

    def speak(self):
        return "Woof"

class Cat(Animal):
    def __init__(self,name,age,color):
        super().__init__(name,age,color)
        self.color = color

    def speak(self):
        return "Meow"

    def __str__(self):
        return f"{self.species} colored Cat named {self.name} makes a sound and is {self.age} years old"