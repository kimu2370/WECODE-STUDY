print("Q1")
def is_odd(num):
    if num%2==0:
        print(num,"= 짝수")
    else:
        print(num,"= 홀수")
print("Q2")
def avg_args(*args):
    result=0
    for i in args:
        result = result + i
    return round(result/len(args),1)
print("Q3")
input1 = input("첫번째 숫자를 입력하세요:")
input2 = input("두번째 숫자를 입력하세요:")

total = int(input1) + int(input2)
print("두 수의 합은 %s 입니다" % total)

print("Q4")
'''
3번 입니다 그 이유는 print에서 문자열을 ,로 나누면 띄어쓰기가 된다.
'''

print("Q5")
f1 = open("D:/ProjectCollection/test.txt",'w',encoding='utf8')
data = "Life is too short\n"
f1.write(data)
f1.close()
# 열고 난 후 닫지 않고 다시 사용하려고 하면 오류가 나기 때문에 close()해줘야 한다.
f2 = open("D:/ProjectCollection.test.txt",'r',encoding='utf8')
print(f2.read())
f2.close()

print("Q6")
f = open("D:/ProjectCollection/test.txt",'a',encoding='utf8')
data = "you need java"
f.write(data)
f.close()

print("Q7")
with open("D:/ProjectCollection/test.txt",'r',encoding='utf8') as f:
    data = f.read()
    data = data.replace('java','python')
with open("D:/ProjectCollection/test.txt",'w',encoding='utf8') as f:
    f.write(data)
