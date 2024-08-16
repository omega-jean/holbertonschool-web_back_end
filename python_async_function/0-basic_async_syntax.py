#!/usr/bin/env python3
"""wait random"""

import asyncio
import random


async def wait_random(max_delay: int = 10) -> float:
    """wait_random"""
    actual_delay: float = random.uniform(0, max_delay)
    await asyncio.sleep(actual_delay)
    return actual_delay
