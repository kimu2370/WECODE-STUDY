print('Q1')
kor,eng,math = 80,75,55
print((kor+eng+math)//3)

print('Q2')
if(13%2==1):
    print("홀수")
else:
    print("짝수")

print('Q3')
id = '881120-1068234'
yyyymmdd = id[:6]
backNum = id[7:]
print(yyyymmdd)
print(backNum)

print('Q4')
pin = "881120-1068234"
print(pin[7])

print('Q5')
a = 'a:b:c:d'
print(a.replace(':','#'))


print('Q6')
a = [1,3,5,4,2]
a.sort()
a.reverse()

print('Q7')
a=['Life','is','too','short']
" ".join(a)

print('Q8')
(1,2,3)+(4,)

print('Q9')
print('주석으로 답을 대신')
'''
3번은 다음과 같은 오류가 발생한다.
>>> a[[1]]='python'
Traceback (most recent call last):
  File "<pyshell#77>", line 1, in <module>
    a[[1]]='python'
TypeError: unhashable type: 'list'
Key는 변하지 않는 값 즉,immutable(불변)값이어야 하는데 리스트는 mutable(가변)값이기 때문이다.

'''

print('Q10')
a={'A':90,'B':80,'C':70}
a['B']

print('Q11')
a=[1,1,1,2,2,3,3,3,4,4,5]
set(a)
{1,2,3,4,5}
list(set(a))

print('Q12')
a=b=[1,2,3]
a[1]=4
print(b+'가 나오는 이유는? 주석')
'''
파이썬은 a=b=[1,2,3]의 형태로 a,b에 같은 값을 할당할 수 있다.
그래서 a[1]위치에 4를 할당하게 되면 a,b같은 리스트 객체를 가리키고 있기 때문에 a,b,값은 [1,4,3]이 된다.
'''


