function findCommonSlot(meetings) {
  let commonSlots = meetings[0];

  for (let i = 1; i < meetings.length; i++) {
    let newCommonSlots = [];

    for (let commonSlot of commonSlots) {
      for (let meetingSlot of meetings[i]) {
        let start = Math.max(commonSlot[0], meetingSlot[0]);
        let end = Math.min(commonSlot[1], meetingSlot[1]);

        if (start < end) {
          newCommonSlots.push([start, end]);
        }
      }
    }

    commonSlots = newCommonSlots;
  }

  if (commonSlots.length === 0) {
    return 'No common slot available';
  } else if (commonSlots.length > 0) {
    return commonSlots.reduce((minSlot, currentSlot) => {
      if (minSlot[1] - minSlot[0] < currentSlot[1] - currentSlot[0]) {
        return minSlot;
      } else {
        return currentSlot;
      }
    });
  }
}

// Case 1:
const meetings1 = [
  [
    [9, 12],
    [14, 16],
  ],
  [
    [10, 12],
    [15, 17],
  ],
  [
    [11, 13],
    [16, 18],
  ],
];
console.log(findCommonSlot(meetings1)); // Output: [11, 12]

// Case 2:
const meetings2 = [
  [
    [8, 10],
    [12, 14],
  ],
  [[9, 11]],
  [[10, 12]],
];
console.log(findCommonSlot(meetings2));
