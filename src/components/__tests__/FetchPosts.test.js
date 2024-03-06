import { render, screen, cleanup, waitFor } from '@testing-library/react';
import FetchPosts from '../FetchPosts';
import axiosMock from 'axios';

afterEach(cleanup);

describe('Testing async methods on fetching posts', () => {
  it('show a loading span if no posts exist', async () => {
    render(<FetchPosts />);
    const loading = screen.getByText(/Loading.../);
    expect(loading).toBeInTheDocument();
    cleanup();
  });
});

describe('When fetch operation is done with axios', () => {
  test('It should show a list of posts', async () => {
    axiosMock.get.mockResolvedValue({
      data: [
        {
          userId: 1,
          id: 1,
          title:
            'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
          body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
        },
        {
          userId: 2,
          id: 2,
          title:
            'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
          body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
        },
      ],
    });
    render(<FetchPosts />);
    const listNode = await screen.findByTestId('list');

    await waitFor(() => {
      expect(listNode).toBeInTheDocument();
    });
    expect(axiosMock.get).toHaveBeenCalledWith(
      'https://jsonplaceholder.typicode.com/posts',
    );
  });
});
