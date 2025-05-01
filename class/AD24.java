import java.util.ArrayDeque;

class AD24{
    public static void main(String[] args) {
        ArrayDeque<Integer> adq = new ArrayDeque<>();

        adq.offerFirst(11);
        adq.offer(22);
        adq.offerLast(48);

        System.out.println(adq);


        adq.pollFirst();
        adq.poll();
        adq.pollLast();

        // peek elements

        System.out.println(adq.peekFirst());
        System.out.println(adq.peek());
        System.out.println(adq.peekLast()); 

        System.out.println(adq);
    }
}