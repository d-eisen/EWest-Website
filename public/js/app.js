
function getFiles() {
    return $.ajax('/api/file')
      .then(res => {
        console.log("User files returned", res);
        return res;
      })
      .fail(err => {
        console.error("Error in retrieving user files", err);
        throw err;
      });
  }
  
  function refreshFileList() {
    const template = $('#list-template').html();
    const compiledTemplate = Handlebars.compile(template);
  
    getFiles()
      .then(files => {
  
        window.fileList = files;
  
        const data = {files: files};
        const html = compiledTemplate(data);
        $('#list-container').html(html);
      })
  }
  
  function handleAddFileClick() {
    console.log("Baby steps...");
    setFormData({});
    toggleAddFileFormVisibility();
  }
  
  function toggleAddFileFormVisibility() {
    $('#form-container').toggleClass('hidden');
  }
  
  function submitFileForm() {
    console.log("Sign Up button clicked.");
  
    const fileData = {
      title: $('#file-name').val(),
      description: $('#file-email').val(),
      description: $('#file-zip').val(),
      _id: $('#file-id').val(),
    };
  
    function validateEmail($email) {
      let emailReg = new RegExp(
        /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
      );
      let valid = emailReg.test(email);

      if (!valid) {
        return false;
      } else {
        return true;
      }
    };

    let method, url;
    if (fileData._id) {
      method = 'PUT';
      url = '/api/file/' + fileData._id;
    } else {
      method = 'POST';
      url = '/api/file';
    }
  
    $.ajax({
      type: method,
      url: url,
      data: JSON.stringify(fileData),
      dataType: 'json',
      contentType : 'application/json',
    })
      .done(function(response) {
        console.log("POST completed");
        refreshFileList();
        toggleAddFileFormVisibility();
      })
      .fail(function(error) {
        console.log("POST error", error);
      })
  
    console.log("Your file data", fileData);
  }
  
  function cancelFileForm() {
    toggleAddFileFormVisibility();
  }
  
  function handleEditFileClick(id) {
    const file = window.fileList.find(file => file._id === id);
    if (file) {
      setFormData(file);
      toggleAddFileFormVisibility();
    }
  }
  
  
  function setFormData(data) {
    data = data || {};
  
    const file = {
      title: data.title || '',
      description: data.description || '',
      _id: data._id || '',
    };
  
    $('#file-name').val(file.name);
    $('#file-email').val(file.email);
    $('#file-confirmEmail').val(file.confirmEmail);
    $('#file-zipCode').val(file.zipCode);
    $('#file-id').val(file._id);
  }
  
  
  function handleDeleteFileClick(id) {
    if (confirm("Are you sure?")) {
      deleteFile(id);
    }
  }
  
  function deleteFile(id) {
    $.ajax({
      type: 'DELETE',
      url: '/api/file/' + id,
      dataType: 'json',
      contentType : 'application/json',
    })
      .done(function(response) {
        console.log("File", id, "deleted.");
        refreshFileList();
      })
      .fail(function(error) {
        console.log("Error, file not deleted.", error);
      })
  }
  
  
  refreshFileList();
  


