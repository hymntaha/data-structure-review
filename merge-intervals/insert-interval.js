class Interval {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }

  print_interval() {
    process.stdout.write(`[${this.start},${this.end}]`)
  }
}

const insert = function (intervals, new_interval) {
  let merged = [], i = 0;

  while (i < intervals.length && intervals[i].end < new_interval.start) {
    merged.push(intervals[i])
    i++
  }

  while (i < intervals.length && intervals[i].start <= new_interval.end) {
    new_interval.start = Math.min(intervals[i].start, new_interval.start);
    new_interval.end = Math.max(intervals[i].end, new_interval.end);
    i++
  }

  merged.push(new_interval);

  while (i < intervals.length) {
    merged.push(intervals[i]);
    i++;
  }

  return merged;


};

process.stdout.write('Intervals after inserting the new interval: ');
let result = insert([
  new Interval(1, 3),
  new Interval(5, 7),
  new Interval(8, 12),
], new Interval(4, 6));
for (i = 0; i < result.length; i++) {
  result[i].print_interval();
}
console.log();
