
import sched, time, random

import datetime

class DummyMeter:
    def __init__(self, max_per_intervall=12000, intervall=3):
        self.intervall = intervall
        self.max_per_intervall = max_per_intervall
        self.cb = None

    def auto(self, cb):
        s = sched.scheduler(time.time, time.sleep)
        self.cb = cb
        def do_something(self, sc):
            self.trigger()
            s.enter(self.intervall, 1, do_something, (self, sc,))

        s.enter(self.intervall, 1, do_something, (self,s,))
        s.run()



    def trigger(self):
        self.cb(int(self.getValue())*1000, int(time.time()))

    def getValue(self):
        return self.max_per_intervall*random.random()

if __name__ == '__main__':
    d = DummyMeter(12000, 3)
    d.auto(print)

