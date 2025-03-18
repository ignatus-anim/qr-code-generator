import { render, screen } from '@testing-library/react';
import { ChakraProvider } from '@chakra-ui/react';
import { describe, expect, jest, test } from '@jest/globals';
import QRGenerator from '../QRGenerator';

// Mock the QRCodeCanvas component
jest.mock('qrcode.react', () => ({
  QRCodeCanvas: () => <div data-testid="qr-code">QR Code Mock</div>,
}));

describe('QRGenerator', () => {
  const renderComponent = () => {
    return render(
      <ChakraProvider>
        <QRGenerator />
      </ChakraProvider>
    );
  };

  test('renders basic UI elements', () => {
    renderComponent();
    
    // Check if URL input is present
    expect(screen.getByPlaceholderText(/https:\/\/example.com/i)).toBeInTheDocument();
    
    // Check if download button is present
    expect(screen.getByRole('button', { name: /download/i })).toBeInTheDocument();
    
    // Check if QR code is rendered
    expect(screen.getByTestId('qr-code')).toBeInTheDocument();
  });

  test('renders all tab options', () => {
    renderComponent();
    
    // Check if all tabs are present
    expect(screen.getByRole('tab', { name: /url/i })).toBeInTheDocument();
    expect(screen.getByRole('tab', { name: /text/i })).toBeInTheDocument();
    expect(screen.getByRole('tab', { name: /email/i })).toBeInTheDocument();
  });

  test('renders style dropdown with options', () => {
    renderComponent();
    
    // Check if style dropdown is present
    const styleDropdown = screen.getByRole('combobox');
    expect(styleDropdown).toBeInTheDocument();
    
    // Check if it has the default value
    expect(styleDropdown.value).toBe('modern');
  });

  test('download button is initially disabled', () => {
    renderComponent();
    
    // Check if download button is disabled by default
    const downloadButton = screen.getByRole('button', { name: /download/i });
    expect(downloadButton).toBeDisabled();
  });
});

