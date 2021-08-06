//import React from 'react';
import { screen, within } from '@testing-library/react';
//import userEvent from '@testing-library/user-event';
import App from '../App';
import { Router } from 'react-router-dom';
import {createMemoryHistory} from 'history';
import Artist from '../components/Artist/Artist';

import axios from 'axios';
jest.mock('axios');

describe('Addition', () => {
    it('knows that 2 and 2 make 4', () => {
      expect(2 + 2).toBe(4);
    });
  });

describe('App', () => {

    const data = {data: [
        {  artist: 'Test Artist 1'},
        {  artist: 'Test Artist 2'}
    ]}

    beforeEach(() => {
        jest.resetAllMocks()
        const history = createMemoryHistory()
        render(
            <Router history={history}>
                <App />
            </Router>
        )
    })

    test("renders welcome message", () => {
        expect(screen.getByText('Welcome!')).toBeInTheDocument()
    });

    test('landing on a bad page', () => {
        const history = createMemoryHistory()
        history.push('/some/bad/route')
        render(
          <Router history={history}>
            <App />
          </Router>,
        )
      
        expect(screen.getByText(404)).toBeInTheDocument()
      })

      test('landing on about page', () => {
        const history = createMemoryHistory()
        history.push('/about')
        render(
          <Router history={history}>
            <App />
          </Router>,
        )
      
        expect(screen.getByText('Page Under Construction')).toBeInTheDocument()
      })

    //   test('it makes a request to the api on load and renders returned artists', async () => {
    //     axios.get.mockResolvedValue({ data: data })
    //     render(<Artist />);
    //     expect(axios.get).toHaveBeenCalledWith(expect.stringMatching(/artists/));
    //     const firstStory = (await screen.findAllByRole('listitem'))[0];
    //     const firstHeadline = within(firstStory).getByRole('heading', { name: "headline" });
    //     expect(firstHeadline.textContent).toBe('Test Story 1')
    // })
})