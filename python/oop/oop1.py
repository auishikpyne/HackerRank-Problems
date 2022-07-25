class Employee:
    
    def __init__(self, first, last, email, salary):
        self.first = first
        self.last = last
        self.email = email
        self.salary = salary

    def fullname(self):
        return '{} {}'.format(self.first, self.last)

emp1 = Employee('rahim', 'karim', 'eh@gmail.com', 1000)
emp2 = Employee('hj','df', 'as@dsf.com', 4563)

print(emp1.salary)
print(emp2.fullname())


