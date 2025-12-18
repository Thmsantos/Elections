export interface Controller<I, O> {
    handle(input: I): Promise<O>;
}
