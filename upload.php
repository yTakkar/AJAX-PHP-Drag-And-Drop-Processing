<?php

  $files = $_FILES["userImage"];

  if($files) {
    if(is_uploaded_file($files['tmp_name'])) {

      $sourcePath = $files['tmp_name'];
      $targetPath = "images/".$files['name'];

      if(move_uploaded_file($sourcePath, $targetPath)) {

?>

        <div class="output">
          <img src="<?php echo $targetPath; ?>">
          <span>uploaded</span>
        </div>

<?php
      exit();
      }
    }
  }
?>
