import { SubmitFeedbackUseCase } from "../../src/use-cases/submit-feedback";

let submitFeedbackUseCase: SubmitFeedbackUseCase;

const createFeedbackSpy = jest.fn();
const sendMailSpy = jest.fn();

describe('SubmitFeedbackUseCase', () => {
  beforeEach(() => {
    submitFeedbackUseCase = new SubmitFeedbackUseCase(
      { create: createFeedbackSpy },
      { sendMail: sendMailSpy }
    );
  });

  test('should be able to submit a feedback', async () => {
    await expect(submitFeedbackUseCase.execute({
      type: 'BUG',
      comment: 'Any Comment',
      screenshot: 'data:image/png;base64,test.jpg'
    })).resolves.not.toThrow();

    expect(createFeedbackSpy).toHaveBeenCalled();
    expect(sendMailSpy).toHaveBeenCalled();
  });

  test('should not be able to submit feedback when type is not provided.', async () => {
    await expect(submitFeedbackUseCase.execute({
      type: '',
      comment: 'Any Comment',
      screenshot: 'data:image/png;base64,test.jpg'
    })).rejects.toThrow();
  });

  test('should not be able to submit feedback when comment is not provided.', async () => {
    await expect(submitFeedbackUseCase.execute({
      type: 'BUG',
      comment: '',
      screenshot: 'data:image/png;base64,test.jpg'
    })).rejects.toThrow();
  });

  test('should not be able to submit feedback when screenshot is invalid format.', async () => {
    await expect(submitFeedbackUseCase.execute({
      type: 'BUG',
      comment: 'Any Comment',
      screenshot: 'any_screnshot.jpg'
    })).rejects.toThrow();
  });
})
