import pyperclip
import os

def copy_file_contents_to_clipboard(file_paths):
    """
    Copies the content of a list of files to the clipboard, with each file's name prepended,
    and removes blank lines from the file contents.

    :param file_paths: List of file paths whose content will be copied
    """
    try:
        # Read the content of each file, remove blank lines, and concatenate them with filenames
        file_contents = []
        for file_path in file_paths:
            with open(file_path, 'r', encoding='utf-8') as file:
                filename = os.path.basename(file_path)
                # Remove blank lines
                lines = file.readlines()
                non_blank_lines = [line for line in lines if line.strip()]
                file_contents.append(f"{filename}:/n{''.join(non_blank_lines)}")
        
        # Join the contents with a separator (e.g., newline between files)
        combined_content = "/n/n".join(file_contents)
        
        # Copy the combined content to the clipboard
        pyperclip.copy(combined_content)
        print("File contents copied to clipboard!")
    except Exception as e:
        print(f"An error occurred: {e}")

# Example usage
if __name__ == "__main__":
    # Replace these with the file paths you want to copy
    file_paths = [
        # "C:/Users/GabrielGhossoub/Desktop/Teach/yallacode/src/components/AboutSection.tsx",
        # "C:/Users/GabrielGhossoub/Desktop/Teach/yallacode/src/components/ContactSection.tsx",
        # "C:/Users/GabrielGhossoub/Desktop/Teach/yallacode/src/components/Footer.tsx",
        # "C:/Users/GabrielGhossoub/Desktop/Teach/yallacode/src/components/HeroSection.tsx",
        # "C:/Users/GabrielGhossoub/Desktop/Teach/yallacode/src/components/HeroSection.css",
        "C:/Users/GabrielGhossoub/Desktop/Teach/yallacode/src/components/TestimonialsSection.tsx",
        "C:/Users/GabrielGhossoub/Desktop/Teach/yallacode/src/components/TestimonialsSection.css",
        # "C:/Users/GabrielGhossoub/Desktop/Teach/yallacode/src/components/WhySection.tsx",
        # "C:/Users/GabrielGhossoub/Desktop/Teach/yallacode/src/components/TracksSection.css",
        # faq
        "C:/Users/GabrielGhossoub/Desktop/Teach/yallacode/src/components/FAQSection.tsx",
         "C:/Users/GabrielGhossoub/Desktop/Teach/yallacode/src/components/FAQSection.css",
        # "C:/Users/GabrielGhossoub/Desktop/Teach/yallacode/src/components/TracksSection.tsx",
        # "C:/Users/GabrielGhossoub/Desktop/Teach/yallacode/src/components/TracksSection.css",
        # "C:/Users/GabrielGhossoub/Desktop/Teach/yallacode/src/App.css",
        # "C:/Users/GabrielGhossoub/Desktop/Teach/yallacode/src/App.tsx",
        # "C:/Users/GabrielGhossoub/Desktop/Teach/yallacode/src/index.css",
        # "C:/Users/GabrielGhossoub/Desktop/Teach/yallacode/src/main.tsx"
    ]
    copy_file_contents_to_clipboard(file_paths)