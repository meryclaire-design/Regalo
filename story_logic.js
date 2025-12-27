document.addEventListener('DOMContentLoaded', () => {
    const storyContainer = document.getElementById('story-container');
    let currentStory = null;
    let currentStoryKey = null;
    let storyHistory = []; // Stores { key: 'nodeKey', element: HTMLDivElement }

    // Check for story parameter in URL
    const urlParams = new URLSearchParams(window.location.search);
    const storyParam = urlParams.get('story');

    if (storyParam && storyData[storyParam]) {
        // We are in "play mode"
        startStory(storyParam);
    } else {
        // We are in "menu mode"
        renderStorySelection();
    }

    function renderStorySelection() {
        if (!storyContainer) return;

        storyContainer.innerHTML = '';

        // Create a wrapper for grid-like rendering
        const selectionWrapper = document.createElement('div');
        selectionWrapper.className = 'grid-container';

        // Iterate over storyData to create cards
        for (const [key, data] of Object.entries(storyData)) {
            // Create <a> tag wrapper instead of div with onclick
            const cardLink = document.createElement('a');
            cardLink.href = `gioca_storia.html?story=${key}`;
            cardLink.className = 'grid-item';
            cardLink.style.textDecoration = 'none'; // Remove underline

            const title = document.createElement('h3');
            title.className = 'item-title';
            title.textContent = data.title;

            cardLink.appendChild(title);

            if (data.description) {
                const desc = document.createElement('p');
                desc.className = 'item-subtitle';
                desc.textContent = data.description;
                cardLink.appendChild(desc);
            }

            selectionWrapper.appendChild(cardLink);
        }

        storyContainer.appendChild(selectionWrapper);
    }

    function startStory(storyKey) {
        currentStory = storyData[storyKey];
        currentStoryKey = storyKey;
        storyHistory = []; // Reset history

        // Reset container and add title ONLY once
        storyContainer.innerHTML = '';

        const storyWrapper = document.createElement('div');
        storyWrapper.style.maxWidth = '600px';
        storyWrapper.style.margin = '0 auto';
        storyWrapper.style.textAlign = 'left';
        storyWrapper.classList.add('fade-in');
        storyWrapper.id = "active-story-wrapper";

        const storyTitle = document.createElement('h2');
        storyTitle.className = 'section-title';
        storyTitle.style.marginBottom = '2rem';
        storyTitle.style.textAlign = 'center';
        storyTitle.textContent = currentStory.title;
        storyWrapper.appendChild(storyTitle);

        storyContainer.appendChild(storyWrapper);

        renderNode(currentStory.startNode);
    }

    function renderNode(nodeKey) {
        const node = currentStory.nodes[nodeKey];
        if (!node) {
            console.error('Nodo non trovato:', nodeKey);
            return;
        }

        const activeWrapper = document.getElementById('active-story-wrapper');
        if (!activeWrapper) return;

        // Create a dedicated container for this step
        const stepContainer = document.createElement('div');
        stepContainer.className = 'story-step fade-in';
        stepContainer.style.marginBottom = '2rem';

        // Push to history
        storyHistory.push({ key: nodeKey, element: stepContainer });

        // Story Text
        const textPara = document.createElement('p');
        textPara.className = 'section-text';
        textPara.style.fontSize = '0.9rem';
        textPara.style.marginBottom = '1.5rem';
        textPara.style.textAlign = 'left';
        textPara.textContent = node.text;
        stepContainer.appendChild(textPara);

        // Interaction Area (Choices or End)
        const interactionDiv = document.createElement('div');
        interactionDiv.style.display = 'flex';
        interactionDiv.style.flexDirection = 'column';
        interactionDiv.style.alignItems = 'flex-start';
        interactionDiv.style.gap = '1rem';

        if (node.choices && node.choices.length > 0) {
            // Dropdown
            const select = document.createElement('select');
            select.style.padding = '10px';
            select.style.fontSize = '1rem';
            select.style.fontFamily = 'var(--font-body)';
            select.style.border = '1px solid #ccc';
            select.style.borderRadius = '5px';
            select.style.marginBottom = '0.5rem';
            select.style.width = '100%';
            select.style.maxWidth = '300px';

            const defaultOption = document.createElement('option');
            defaultOption.text = "Scegli un'opzione...";
            defaultOption.value = "";
            defaultOption.disabled = true;
            defaultOption.selected = true;
            select.appendChild(defaultOption);

            node.choices.forEach(choice => {
                const option = document.createElement('option');
                option.value = choice.next;
                option.text = choice.text;
                select.appendChild(option);
            });

            interactionDiv.appendChild(select);

            // Container for buttons (Row)
            const btnContainer = document.createElement('div');
            btnContainer.style.display = 'flex';
            btnContainer.style.flexWrap = 'wrap';
            btnContainer.style.gap = '10px';
            btnContainer.style.width = '100%';

            // Confirm Button
            const confirmBtn = document.createElement('button');
            confirmBtn.className = 'cta-button';
            confirmBtn.textContent = 'Conferma';
            confirmBtn.onclick = () => {
                const selectedNext = select.value;
                const selectedText = select.options[select.selectedIndex].text;

                if (selectedNext) {
                    // Lock this step: Remove interaction, show selected choice
                    interactionDiv.innerHTML = '';

                    const choiceRecord = document.createElement('p');
                    choiceRecord.style.fontStyle = 'italic';
                    choiceRecord.style.color = '#666';
                    choiceRecord.style.marginTop = '0.5rem';
                    choiceRecord.innerHTML = `... <b>${selectedText}</b>`;
                    interactionDiv.appendChild(choiceRecord);

                    // Proceed to next node
                    renderNode(selectedNext);
                } else {
                    alert("Per favore, seleziona un'opzione!");
                }
            };

            // Back Button (if history > 1)
            if (storyHistory.length > 1) {
                const backBtn = document.createElement('button');
                backBtn.className = 'cta-button';
                backBtn.textContent = 'Indietro';
                backBtn.style.backgroundColor = 'transparent';
                backBtn.style.color = '#555';
                backBtn.style.border = '1px solid #ccc';

                backBtn.onclick = () => {
                    goBack();
                };
                btnContainer.appendChild(backBtn);
            }

            btnContainer.appendChild(confirmBtn);
            interactionDiv.appendChild(btnContainer);

        } else if (node.type === 'text_input') {
            // Check for saved content FIRST
            const savedText = localStorage.getItem('weekend_story_content');

            if (savedText) {
                // RESTORE VIEW: Show saved text and end buttons
                const userTextDisplay = document.createElement('p');
                userTextDisplay.className = 'section-text';
                userTextDisplay.style.whiteSpace = 'pre-wrap';
                userTextDisplay.textContent = savedText;
                interactionDiv.appendChild(userTextDisplay);

                // Confirmation message
                const msg = document.createElement('p');
                msg.style.color = 'green';
                msg.style.fontStyle = 'italic';
                msg.style.textAlign = 'center';
                msg.style.marginBottom = '1rem';
                msg.textContent = "Storia recuperata con successo.";
                interactionDiv.appendChild(msg);

                // Show End Options (logic shared)
                renderEndButtons(interactionDiv, true);

            } else {
                // SHOW INPUT VIEW
                const textarea = document.createElement('textarea');
                textarea.style.width = '100%';
                textarea.style.height = '150px';
                textarea.style.padding = '10px';
                textarea.style.fontSize = '1rem';
                textarea.style.fontFamily = 'var(--font-body)';
                textarea.style.border = '1px solid #ccc';
                textarea.style.borderRadius = '5px';
                textarea.style.marginBottom = '1rem';
                textarea.placeholder = "Scrivi qui la tua storia preferita amore...";

                interactionDiv.appendChild(textarea);

                const submitBtn = document.createElement('button');
                submitBtn.className = 'cta-button';
                submitBtn.textContent = 'Conferma Storia';

                submitBtn.onclick = () => {
                    const userText = textarea.value;
                    if (!userText.trim()) {
                        alert("Amore scrivi qualcosa prima di confermare!");
                        return;
                    }

                    // Save to memory (localStorage)
                    localStorage.setItem('weekend_story_content', userText);

                    // Lock the input
                    interactionDiv.innerHTML = '';

                    const userTextDisplay = document.createElement('p');
                    userTextDisplay.className = 'section-text';
                    userTextDisplay.style.whiteSpace = 'pre-wrap';
                    userTextDisplay.textContent = userText;
                    interactionDiv.appendChild(userTextDisplay);

                    const confirmMsg = document.createElement('p');
                    confirmMsg.style.color = 'green';
                    confirmMsg.style.fontStyle = 'italic';
                    confirmMsg.style.textAlign = 'center';
                    confirmMsg.style.marginBottom = '1rem';
                    confirmMsg.textContent = "Storia registrata con successo! La tua fidanzata si impegnerà ad organizzare il weekend ideale per te";
                    interactionDiv.appendChild(confirmMsg);

                    renderEndButtons(interactionDiv, true);
                };

                interactionDiv.appendChild(submitBtn);
            }

        } else {
            // End of story (normal endings)
            const endText = document.createElement('p');
            endText.className = 'section-text';
            endText.style.fontWeight = 'bold';
            endText.textContent = "Fine della storia.";
            interactionDiv.appendChild(endText);

            renderEndButtons(interactionDiv, false);
        }

        stepContainer.appendChild(interactionDiv);
        activeWrapper.appendChild(stepContainer);

        // Scroll to the new step
        stepContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    function renderEndButtons(container, isRewrite) {
        // Container for end buttons
        const endBtnContainer = document.createElement('div');
        endBtnContainer.style.display = 'flex';
        endBtnContainer.style.flexDirection = 'column';
        endBtnContainer.style.gap = '0.5rem';
        endBtnContainer.style.width = '100%';
        endBtnContainer.style.marginTop = '1rem';

        // Back button at end (Undo last choice) - Only if NOT rewrite/input mode (logic hard to mix, keeping simple)
        if (!isRewrite && storyHistory.length > 1) {
            const backBtn = document.createElement('button');
            backBtn.className = 'cta-button';
            backBtn.textContent = 'Cambia ultima scelta';
            backBtn.style.backgroundColor = 'transparent';
            backBtn.style.color = '#555';
            backBtn.style.border = '1px solid #ccc';

            backBtn.onclick = () => {
                goBack();
            };
            endBtnContainer.appendChild(backBtn);
        }

        const restartBtn = document.createElement('button');
        restartBtn.className = 'cta-button';
        restartBtn.textContent = 'Torna al menu';
        restartBtn.onclick = () => window.location.href = 'la_storia_perfetta.html';

        const replayBtn = document.createElement('button');
        replayBtn.className = 'cta-button';
        if (isRewrite) {
            replayBtn.textContent = 'Riscrivi questa storia';
            replayBtn.onclick = () => {
                localStorage.removeItem('weekend_story_content');
                startStory(currentStoryKey);
            };
        } else {
            replayBtn.textContent = 'Ricomincia questa storia';
            replayBtn.onclick = () => startStory(currentStoryKey);
        }

        endBtnContainer.appendChild(restartBtn);
        endBtnContainer.appendChild(replayBtn);

        container.appendChild(endBtnContainer);
    }

    function goBack() {
        // Must have at least a current step and a previous step to go back to choice
        if (storyHistory.length < 2) return;

        // 1. Pop current step (the one where we clicked Back)
        const currentStep = storyHistory.pop();
        if (currentStep && currentStep.element) {
            currentStep.element.remove();
        }

        // 2. Pop previous step (the one we want to retry)
        const previousStep = storyHistory.pop();
        if (previousStep && previousStep.element) {
            previousStep.element.remove();
        }

        // 3. Re-render previous step (it will be added back to history)
        if (previousStep) {
            renderNode(previousStep.key);
        }
    }
});
