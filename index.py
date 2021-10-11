def first_func():
	print('a')

def second_func():
	print('b')

def main(param=None):
	if param is not None:
		first_func()
	else:
		# the need for this else block is because we aren't returning anything.
		second_func()

if __name__ == '__main__':
	print('call with param')
	main('a')
	print('call w/o param')
	main()