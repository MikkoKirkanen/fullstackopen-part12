import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import App from '../src/App'

describe('<App />', () => {
  it('should render App', () => {
    render(<App />)
    expect(screen.getByText('Todos')).toBeVisible()
  })
})
