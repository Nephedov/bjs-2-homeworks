class AlarmClock {
  constructor() {
    (this.alarmCollection = []), (this.intervalId = null);
  }

  addClock(time, callback) {
    if (!(time && callback)) {
      throw new Error("Отсутствуют обязательные аргументы");
    }
    if (this.alarmCollection.some((element) => {element.time === time})) {
      console.warn("Уже присутствует звонок на это же время");
    }
    return this.alarmCollection.push({ callback, time, canCall: true });
  }

  removeClock(alarm) {
    this.alarmCollection = this.alarmCollection.filter(
      (value) => value.time !== alarm
    );
  }

  getCurrentFormattedTime() {
    return new Date().toLocaleTimeString("ru-Ru", {
      hour: "2-digit",
      minute: "2-digit",
    });
  }

  start() {
    if (this.intervalId != null) {
      return;
    }

    setInterval(() => {
      this.alarmCollection.forEach((alarm) => {
        if (
          alarm.time == this.getCurrentFormattedTime() &&
          alarm.canCall == true
        ) {
          alarm.canCall = false;
          alarm.callback();
        }
      });
    }, 1000);
  }

  stop() {
    clearInterval(this.intervalId);
    this.intervalId = null;
  }

  resetAllCalls() {
    this.alarmCollection.forEach((value) => (value.canCall = true));
  }

  clearAlarms() {
    this.stop();
    this.alarmCollection = [];
  }
}

