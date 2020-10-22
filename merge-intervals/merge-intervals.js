class Interval {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }

  print_interval() {
    process.stdout.write(`[${this.start}, ${this.end}]`);
  }
}


function merge(intervals) {

  if (intervals.length < 2) {
    return intervals;
  }

  intervals.sort((a, b) => a.start - b.start);

  let mergedInterval = [];
  let start = intervals[0].start, end = intervals[0].end;

  for (let i = 1; i < intervals.length; i++) {
    let currentInterval = intervals[i];

    if (currentInterval.start <= end) {
      end = Math.max(currentInterval.end, end)

    } else {
      mergedInterval.push(new Interval(start, end))
      start = currentInterval.start;
      end = currentInterval.end;
    }
  }

  mergedInterval.push(new Interval(start, end));
  return mergedInterval;
}

process.stdout.write('Merged intervals: ');
let result = merge([new Interval(1, 4), new Interval(2, 5), new Interval(7, 9)]);
for (i = 0; i < result.length; i++) {
  result[i].print_interval();
}
console.log();

// process.stdout.write('Merged intervals: ');
// result = merge([new Interval(6, 7), new Interval(2, 4), new Interval(5, 9)]);
// for (i = 0; i < result.length; i++) {
//   result[i].print_interval();
// }
// console.log();
//
// process.stdout.write('Merged intervals: ');
// result = merge([new Interval(1, 4), new Interval(2, 6), new Interval(3, 5)]);
// for (i = 0; i < result.length; i++) {
//   result[i].print_interval();
// }
// console.log();
