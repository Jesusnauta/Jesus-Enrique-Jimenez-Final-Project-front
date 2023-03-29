import { act, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { usePlayers } from '../../hooks/use.players';
import { Player } from '../../models/players';
import { PlayersRepo } from '../../services/players.api.repo';
import { store } from '../../store/store';
import Form from './form';

const mockParams = { id: '2' };

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => mockParams,
}));
jest.mock('../../hooks/use.players');

const mockRepo = {
  url: 'testing',
  loadOnePlayer: jest.fn(),
  createPlayer: jest.fn(),
  updatePlayer: jest.fn(),
  deletePlayer: jest.fn(),
} as unknown as PlayersRepo;
describe('Given the Form component', () => {
  describe('When we render the form component', () => {
    beforeEach(async () => {
      (usePlayers as jest.Mock).mockReturnValue({
        playersState: {
          allPlayers: [
            {
              id: '1',
              name: 'test1',
              nationality: 'test1',
            } as Player,
            {
              id: '2',
              name: 'test2',
              nationality: 'test2',
            } as Player,
          ],
        },

        createPlayer: jest.fn(),
        updatePlayer: jest.fn(),
      });
      // eslint-disable-next-line testing-library/no-unnecessary-act
      await act(async () => {
        // eslint-disable-next-line testing-library/no-render-in-setup
        render(
          <Provider store={store}>
            <MemoryRouter>
              <Form></Form>
            </MemoryRouter>
          </Provider>
        );
      });
    });
    test('then it calls createPlayer when submitting a player', async () => {
      const submitButton = await screen.findAllByRole('button');
      await userEvent.click(submitButton[0]);
      expect(usePlayers(mockRepo).createPlayer).toHaveBeenCalled();
    });

    test('then it calls updatePlayer when submitting a player', async () => {
      const submitButton = await screen.findAllByRole('button');
      await userEvent.click(submitButton[0]);
      expect(usePlayers(mockRepo).updatePlayer).toHaveBeenCalled();
    });
  });
  // describe('Given the form component ', () => {

  //    render(
  //         <Provider store={store}>
  //           <MemoryRouter>
  //             <Form></Form>
  //           </MemoryRouter>
  //         </Provider>
  //       );
  //    test('then it calls updatePlayer when submitting a player', async () => {
  //      const submitButton = await screen.findAllByRole('button');
  //      await userEvent.click(submitButton[0]);
  //      expect(usePlayers(mockRepo).updatePlayer).toHaveBeenCalled();

  //    });
});
