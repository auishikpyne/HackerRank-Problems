def print_formatted(number):
    # your code goes here
    l = len(str(bin(number))[2:])    
    for i  in range(1, number+1):
        print(str(i).rjust(l," "),str(oct(i))[2:].rjust(l," "),str(hex(i))[2:].rjust(l," ").upper(),str(bin(i))[2:].rjust(l," "))


if __name__ == '__main__':
    n = int(input())
    print_formatted(n)