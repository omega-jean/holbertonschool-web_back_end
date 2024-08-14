#!/usr/bin/env python3
"""to_kv"""
from typing import Union, Tuple


def to_kv(k: str, v: Union[int, float]) -> Tuple[str, float]:
    """to_kv"""
    x = v ** 2
    return (k, x)
