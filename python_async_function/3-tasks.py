#!/usr/bin/env python3
"""task_wait_random"""

import asyncio
import random
wait_random = __import__('0-basic_async_syntax').wait_random


def task_wait_random(max_delay: int = 10) -> asyncio.Task:
    """task_wait_random"""
    return asyncio.create_task(wait_random(max_delay))