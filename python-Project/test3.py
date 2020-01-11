# Q1. 다음 코드의 결과값은 무엇일까?
print('Q1')
print('shirt')

# Q2. while문을 써서 1부터1000까지의 자연수중 3의 배수의 합을 구해보자.
print('Q2')
number = 3
result = 0
while number<1000:
    result = result + number
    number = number + 3
print(result)
    
# Q3. while문을 사용하여 다음과 같이 별(*)을 표시하는 프로그램을 작성해 보자.
print('Q3')
star = ''
while len(star)<5:
    star=star+'*'
    print(star)

# Q4. for문을 사용해 1부터 100까지의 숫자를 출력해 보자.
print('Q4')
for number in range(1,101):
    print(number,end=" ")
    if number%10==0:
        print('')
        
'''
Q5. A 학급에 총 10명의 학생이 있다. 이 학생들의 중간고사 점수는 다음과 같다.
    [70, 60, 55, 75, 95, 90, 80, 80, 85, 100]
    for 문을 사용하여 A 학급의 평균 점수를 구해 보자.
'''
print('Q5')
students = [70,60,55,75,95,90,80,85,100]
avg = 0
for grade in students:
    avg = avg + grade
    if grade==100:
        print(avg/len(students))

'''
Q6. 리스트 중에서 홀수에만 2를 곱하여 저장하는 다음 코드가 있다.

numbers = [1, 2, 3, 4, 5]
result = []
for n in numbers:
    if n % 2 == 1:
        result.append(n*2)
위 코드를 리스트 내포(list comprehension)를 사용하여 표현해 보자.
'''
print('Q6')
numbers=[1,2,3,4,5]
result=[n*2 for n in numbers if n%2==1 ]
print(result)
