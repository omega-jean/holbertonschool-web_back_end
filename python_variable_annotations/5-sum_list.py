#!/usr/bin/env python3
''''''

from typing import List


def sum_list(input_list: List[float]) -> float:
    '''sum_list'''
    a: float = 0.0
    for i in input_list:
        a += i
    return a
