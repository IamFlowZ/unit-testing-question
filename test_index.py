import unittest
from unittest.mock import patch
from index import main


class TestMain(unittest.TestCase):

	@patch('index.first_func')
	@patch('index.second_func')
	def test_main_with_param(self, first_mock, second_mock):
		main()
		self.assertTrue(first_mock.called)
		self.assertFalse(second_mock.called)

	@patch('index.first_func')
	@patch('index.second_func')
	def test_main_without_param(self, first_mock, second_mock):
		main('1')
		self.assertFalse(first_mock.called)
		self.assertTrue(second_mock.called)

if __name__ == '__main__':
	unittest.main()