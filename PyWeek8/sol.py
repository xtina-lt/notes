class User:
    def __init__(self, name, email):
        self.name = name
        self.email = email
        self.account = BankAccount(int_rate=0.02, balance=0)


    # Add a make_deposit method to the User class 
    # that calls on it's bank account's instance methods.
    def make_deposit(self, amount, account_name="checking"):
        self.account.deposit(amount)
        return self

    # Add a make_withdrawal method to the User class 
    # that calls on it's bank account's instance methods.
    def make_withdrawal(self, amount):
        self.account.withdraw(amount)
        return self


    # Add a display_user_balance method to the User class 
    # that displays user's account balance
    def display_user_balance(self, account_name):
        print(self.name)
        self.account.display_account_info()
        return self


class BankAccount:
    accounts = []
    def __init__(self,int_rate,balance):
        self.int_rate = int_rate
        self.balance = balance
        BankAccount.accounts.append(self)

    def deposit(self, amount):
        self.balance += amount
        return self

    def withdraw(self,amount):
        if(self.balance - amount) >= 0:
            self.balance -= amount
        else:
            print("Insufficient Funds: Charging a $5 fee")
            self.balance -= 5
        return self
    
    def display_account_info(self):
        print(f"Balance: {self.balance}")
        return self

    def yeild_interest(self):
        if self.balance > 0:
            self.balance += (self.balance * self.int_rate)
        return self


    @classmethod
    def print_all_accounts(cls):
        for account in cls.accounts:
            account.display_account_info()

# User test
user1 = User("Sadie", "s@s.com")
user1.make_deposit(100).make_deposit(250).display_user_balance()

user2 = User("William", "w@w.com")
user2.make_deposit(1000).display_user_balance().make_withdrawal(450).display_user_balance()
