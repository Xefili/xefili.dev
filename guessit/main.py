from click import password_option
from colorama import Style
from colorama import Back
from colorama import Fore
import text
from time import sleep
import questions


title = text.title
print(title)
start = input(f"Type {Fore.GREEN}'Go'{Fore.RESET} to start the game or {Fore.RED}'Exit'{Fore.RESET} to quit: ")
que = questions.questions
ans = questions.ans_dict
score = 0


def loading(wtl):
    print(f"{wtl}.")
    sleep(0.2)
    print(f"{wtl}..")
    sleep(0.2)
    print(f"{wtl}...")
    for i in range(1, 20):
        print()
    print(title)
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
            loading(wtl=" ")
            Game.start(question_num=question_num)

        if answer == ans[que[question_num]].lower():
            print("Correct!")
            question_num = question_num + 1
            loading(wtl=" ")
            Game.start(question_num=question_num)

        if answer != ans[que[question_num]] or ans[que[question_num]].lower():
            print("Wrong answer!")
            for i in range(1, 20):
                print()
            print(title)
            print()
            print()
            print(f"{Fore.YELLOW}Restart?(Y/n){Fore.RESET}")
            a = input()
            if a == "y" or "Y":
                Game.start(question_num=0)
            if a != "Y" or "y":
                pass

#region Game
if start == 'Exit' or start == 'exit':
    pass

if start == "help":
    print(f"{Fore.RED}No help available.{Fore.RESET}")

if start == "sources":
    print("font: figlet standart\nprogram: henry schuetterle\ngoogle")

if start == 'Go' or start == 'go':
    loading(wtl="Starting")
    Game.start(question_num=0)
#endregion