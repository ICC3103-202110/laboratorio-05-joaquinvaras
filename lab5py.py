#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Sun May 16 17:45:58 2021

@author: joaquinvaras
"""
d={}
print("tip calculator app")
d["billamount"] = int(input("bill amount : "))
i=1
while i == 1:
    tipc = int(input("Tip(%)"))
    if tipc >= 0 and tipc <= 100:
        i=0
    else:
        print("porcentaje debe estar entre 0 - 100")
d["tip(%)"] = tipc
d["tip"] = tipc * d["billamount"] / 100
d["total"] = d["tip"] + d["billamount"]


i=d.keys()
v=d.values()
print(i)
print(v)

