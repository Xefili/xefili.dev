from colorama import init
from colorama import Style
from colorama import Back
from colorama import Fore
import text
from time import sleep
import questions

init()
title = text.title
go_title = text.go_title
print(title)
print(f"Type {Fore.GREEN}'Go'{Fore.RESET} to start the game or {Fore.RED}'Exit'{Fore.RESET} to quit:")
start = input()
que = questions.questions
ans = questions.ans_dict
score = 0 # unused rn


def loading(wtl):
    print(f"{wtl}.")
    sleep(0.2)
    print(f"{wtl}..")
    sleep(0.2)
    print(f"{wtl}...")
    for i in range(1, 21):
        print()
    print(title)
    print()
    print()
    print()

class Game():
    question_num = 0
    def start(question_num):
        print(que[question_num])
        answer = input("Answer: ")
        if answer == ans[que[question_num]]:
            print("Correct!")
            question_num = question_num + 1
            loading(wtl="")
            Game.start(question_num=question_num)

        if answer == ans[que[question_num]].lower():
            print("Correct!")
            question_num = question_num + 1
            loading(wtl="")
            Game.start(question_num=question_num)

        if answer != ans[que[question_num]] or ans[que[question_num]].lower():
            print()
            for i in range(1, 21):
                print()
            print(go_title)
            print()
            print()
            print(f"{Fore.YELLOW}Restart?(Y/n){Fore.RESET}")
            a = input()
            if a == "y" or a == "Y":
                for i in range(1, 21):
                    print()
                print(title)
                print()
                print()
                print()
                Game.start(question_num=0)
            if a == "N" or a == "n":
                print(f"{Fore.LIGHTBLUE_EX}See you next time!{Fore.RESET}")
                sleep(0.5)
                pass


if start == 'Exit' or start == 'exit':
    pass

if start == "help":
    print(f"{Fore.RED}No help available.{Fore.RESET}")

if start == "sources":
    print("font: figlet standart\nprogram: henry schuetterle\ngoogle")

if start == 'Go' or start == 'go':
    loading(wtl="Starting")
    Game.start(question_num=0)

# Code written by github.com/Xefili 