export function createDatesList() {
    const datesArray = [];

    const nowInMs = Date.now();
    const dayInMs = 86400000;

    for (let i = 0; i < 14; i++) {
      const date = nowInMs-dayInMs*i;
      const dateISOStr = new Date(date).toISOString().slice(0,10);
      datesArray.push(dateISOStr);
    }

    return datesArray;
  }