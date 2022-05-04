import { SubmitFeedbackUseCase } from "../../src/use-cases/submit-feedback";

describe('SubmitFeedbackUseCase', () => {
  test('should be able to submit a feedback', async () => {

    const submitFeedbackUseCase = new SubmitFeedbackUseCase(
      { create: async () => {} },
      { sendMail: async () => {} }
    );

    await expect(submitFeedbackUseCase.execute({
      type: 'BUG',
      comment: 'Any Comment',
      screenshot: 'test.jpg'
    })).resolves.not.toThrow();
  });
})
