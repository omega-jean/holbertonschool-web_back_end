#!/usr/bin/env python3
"""element_lenght"""


from typing import Iterable, List, Sequence, Tuple

def element_length(lst: Iterable[Sequence]) -> List[Tuple[Sequence, int]]:
    """element_lenght"""
    return [(i, len(i)) for i in lst]
