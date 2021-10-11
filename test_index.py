import unittest
from unittest.mock import patch
from index import main


class TestMain(unittest.TestCase):

	@patch('index.second_func')
	@patch('index.first_func')
	def test_main_with_param(self, first_mock, second_mock):
		main(1)
		first_mock.assert_called()
		second_mock.assert_not_called()

	@patch('index.second_func')
	@patch('index.first_func')
	def test_main_without_param(self, first_mock, second_mock):
		main()
		first_mock.assert_not_called()
		second_mock.assert_called()

if __name__ == '__main__':
	unittest.main()