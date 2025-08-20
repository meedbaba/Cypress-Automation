import 'cypress-file-upload'

describe('File uploads', ()=>{
    it('single file upload', ()=>{
        cy.visit('https://the-internet.herokuapp.com/upload')
        cy.get('#file-upload').attachFile('test1.pdf')
        cy.get('#file-submit').click()
        cy.wait(5000)
        cy.get("div[class='example'] h3").should('have.text', 'File Uploaded!')
    })

    it('file upload rename', ()=>{
        cy.visit('https://the-internet.herokuapp.com/upload')
        cy.get('#file-upload').attachFile({filePath:'test1.pdf', fileName:'newtest'})
        cy.get('#file-submit').click()
        cy.wait(5000)
        cy.get("#uploaded-files").contains('newtest')
    })

    it('Drag and drop Upload', ()=>{
         cy.visit('https://the-internet.herokuapp.com/upload')
         cy.get('#drag-drop-upload').attachFile('test1.pdf', {subjectType: 'drag-n-drop'})
         cy.wait(3000)
         cy.get('#drag-drop-upload').contains('test1')
    })

    it('Multiple file uploads', ()=>{
        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')
        cy.get('#filesToUpload').attachFile(['test1.pdf', 'test2.pdf'])
        cy.wait(2000)
        cy.get(':nth-child(6) > strong').should('contain.text', 'Files You Selected:')
    })

    it('shadow Dom Uplaod', ()=>{
        cy.visit('https://www.htmlelements.com/demos/fileupload/shadow-dom/index.htm')
        cy.get('.smart-browse-input', {includeShadowDom:true})
            .attachFile('test2.pdf')
        cy.wait(5000)
        cy.get('.smart-item-name', {includeShadowDom:true}).contains('test2')

    })
})