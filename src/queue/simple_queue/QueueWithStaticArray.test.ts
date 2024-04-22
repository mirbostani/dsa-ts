import { QueueWithStaticArray } from "./QueueWithStaticArray";

describe("Queue with static array", () => {
  it("Should create a queue with three elements", () => {
    let queue = new QueueWithStaticArray(3);
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);

    expect(queue.getSize()).toBe(3);
  });
});
