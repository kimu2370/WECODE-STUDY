'''
모듈로 연산 구현해보기.
나머지 = 나눠지는 수 - 몫 * 나누는 수
r = a - q * d
'''
def modulo(num1,num2):
    r = 0
    if(num1==0):
        return 0
    elif(num2==0):
        return '잘못된 연산입니다.'
    elif(num1==None or num2==None):
        return '잘못된 연산입니다.'
    else:
        q = int(num1/num2)
        r = num1-q*num2
    return r
