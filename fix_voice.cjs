const fs = require('fs');

let data = fs.readFileSync('src/components/VoiceTextInput.tsx', 'utf8');

const target = `      recognition.onstart = () => {
        setIsRecording(true);
        setError(null);
      };

      recognition.onresult = (event: any) => {
        let currentInterim = '';
        let finalTranscript = '';

        for (let i = event.resultIndex; i < event.results.length; ++i) {
          if (event.results[i].isFinal) {
            finalTranscript += event.results[i][0].transcript;
          } else {
            currentInterim += event.results[i][0].transcript;
          }
        }`;

const replacement = `      recognition.onstart = () => {
        setIsRecording(true);
        setError(null);
        lastProcessedIndexRef.current = 0;
      };

      recognition.onresult = (event: any) => {
        let currentInterim = '';
        let finalTranscript = '';

        const startIndex = Math.max(event.resultIndex, lastProcessedIndexRef.current);

        for (let i = startIndex; i < event.results.length; ++i) {
          if (event.results[i].isFinal) {
            finalTranscript += event.results[i][0].transcript;
            lastProcessedIndexRef.current = i + 1;
          } else {
            currentInterim += event.results[i][0].transcript;
          }
        }`;

let newData = data.replace(
  "const initialValueRef = useRef<string>('');", 
  "const initialValueRef = useRef<string>('');\n  const lastProcessedIndexRef = useRef<number>(0);"
);

newData = newData.replace(target, replacement);

fs.writeFileSync('src/components/VoiceTextInput.tsx', newData);
console.log('Fixed Android bug');
