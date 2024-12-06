import pygame
import sys

# Initialize Pygame
pygame.init()

# Set up display
screen = pygame.display.set_mode((1280, 720))  # Width, Height
pygame.display.set_caption('My First Game')
pygame.draw.rect(2, 3, 3, 2)

# Set up colors
WHITE = (255, 255, 255)
BLACK = (0, 0, 0)

# Main game loop
while True:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            pygame.quit()
            sys.exit()

    # Fill screen with white color
    screen.fill(WHITE)

    # Update display
    pygame.display.update()
