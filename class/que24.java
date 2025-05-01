import java.util.Queue;
import java.util.ArrayDeque;

class que24{
    public static void main(String[] args) {
        Queue<Integer>queue = new ArrayDeque<>();
        queue.add(10);
        queue.add(20);
        queue.add(30);
        queue.add(40);
        queue.offer(50);
        queue.offer(100);
        System.out.println(queue);
        queue.remove();
        queue.remove();
        queue.poll();
        System.out.println(queue);
    }
}